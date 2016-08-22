require 'mysql'

begin
  con = Mysql.new 'localhost', 'elephant', '2601', 'quysql'
  data = con.query "SELECT * FROM Writers WHERE Id IN (1, 3, 5)"
  data.each_hash do |row|
    #puts row
    puts row["Id"] + " " + row["Name"]
  end
  rescue Mysql::Error => e
    puts e.errno
    puts e.error
  ensure con.close if con
end