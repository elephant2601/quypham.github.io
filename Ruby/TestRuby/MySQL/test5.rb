require 'mysql'

begin
  con = Mysql.new 'localhost', 'elephant', '2601', 'quysql'
  data = con.query "DELETE FROM Writers WHERE Id IN (3)"
  puts "#{con.affected_rows}"
  rescue Mysql::Error => e
    puts e.errno
    puts e.error
  ensure con.close if con
end