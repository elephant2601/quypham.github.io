require 'mysql'

begin
  con = Mysql.new 'localhost', 'elephant', '2601', 'quysql'
  rs = con.query("select Data from Images limit 1")
  f = File.new "monster2.png", "wb"
  f.write rs.fetch_row.pack 'H*'
ensure con.close if con
end