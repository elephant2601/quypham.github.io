require 'mysql'

begin
  con = Mysql.new 'localhost', 'elephant', '2601', 'quysql'
  data = con.query "SELECT * FROM Writers"
  fields = data.fetch_fields
  puts "%3s %s" % [fields[0].name, fields[1].name]
  data.each_hash do |row|
    #puts row
    puts "%3s %s" % [row["Id"], row["Name"]]
  end
  rescue Mysql::Error => e
    puts e.errno
    puts e.error
  ensure con.close if con
end