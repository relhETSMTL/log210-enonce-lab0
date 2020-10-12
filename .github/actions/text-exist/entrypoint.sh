#!/bin/sh -l

echo "text-exist $1 > $3"
echo " " >> $3
echo " "
if [  -f $1 ]; then
  echo "EXIST => #$1# true" >> $3
  echo "EXIST => #$1# true" 
else

  echo "EXIST => #$1# false" >> $3
  echo "EXIST => #$1# false" 
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
    echo "SUCCESS => #$1# [$line_with_space] text-exist"
  else
    echo "ERROR => #$1# [$line_with_space] not text-exist" >> $3
    echo "ERROR => #$1#  [$line_with_space] not text-exist" 
  fi
done
