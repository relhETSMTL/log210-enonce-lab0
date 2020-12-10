#!/bin/sh -l
if [  -f $1 ]; then
  echo "EXIST => #$1# true" >> $3
else
  echo "EXIST => #$1# false" >> $3
fi

file_content=$(cat $1 | tr -d "[:space:]" | tr "-" "!")
phrases=$(echo $2 | tr " " "_" | tr ";" "\n")

for line in $phrases
do
  line_with_space=$(echo $line | tr "_" " ")
  phrase=$(echo $line | tr "_" " " | tr -d "[:space:]" | tr "-" "!")
  nb_lines=$(echo $file_content | grep -- $phrase | wc -l)
  if [ $nb_lines = "1" ];  then
    echo "SUCCESS => #$1# [$line_with_space] text-exist" >> $3
  else
    echo "ERROR => #$1# [$line_with_space] not text-exist" >> $3
  fi
done
