require 'mysql'

begin
	conn = Mysql.new 'localhost', 'elephant', '2601'
	puts conn.get_server_info
	rs = conn.query 'SELECT VERSION()'
	puts rs.fetch_row

rescue Mysql::Error => e
	puts e.errno
	puts e.error

ensure
	conn.close if conn
end