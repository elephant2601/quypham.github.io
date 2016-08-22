require 'mysql'

name = "pham van quy"

begin
  con = Mysql.new 'localhost', 'elephant', '2601', 'quysql'
  data = con.prepare "insert into Writers(Name) values(?)"
  data.execute name
  rescue Mysql::Error => e
    puts e.errno
    puts e.error
  ensure con.close if con
end