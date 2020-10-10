#!/bin/sh -l

echo "text-exist $1 > $2 > $3"


mails=$(echo $2 | tr " " "_" | tr ";" "\n")
for addr in $mails
do
  res=$(echo $addr | tr "_" " ")
  present=$(grep -F "$res"  $1 | wc -l)
  # echo ::set-output name=present::$present
  if [ $present = "1" ];  then
    echo "SUCCESS => $1 [$res] is present" >> $3
    echo "SUCCESS => $1 [$res] is present "
  else
    echo "ERROR => $1 [$res] is not present" >> $3
    echo "ERROR =>$1  [$res] is not present" 
  fi

done


       