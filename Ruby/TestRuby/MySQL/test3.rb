require 'mysql'

begin
  con = Mysql.new 'localhost', 'elephant', '2601', 'quysql'
  data = con.query("SELECT * FROM Writers")
  data_row = data.num_rows
  data_col = con.field_count
  puts "there are #{data_row} rows"
  puts "there are #{data_col} colum"
  data_row.times do 
    puts data.fetch_row.join("\s")
  end
  data.each do |row|
    puts row.join("\s")
  end
  rescue Mysql::Error => e
    puts e.errno
    puts e.error
  ensure con.close if con
end