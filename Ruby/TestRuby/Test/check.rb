def check(str)
  result = true
  str.each_char do |i|
    result = false if str.count(i) != 1
  end
  result
end
puts check("qww")