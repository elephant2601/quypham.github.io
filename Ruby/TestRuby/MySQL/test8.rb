require 'mysql'

begin
	file = File.open("monster1.png", "rb")
	img = file.read
	rescue SystemCallError => e
		puts e
	ensure file.close if file
end


begin
	con = Mysql.new 'localhost', 'elephant', '2601', 'quysql'
	pst = con.prepare("insert into Images set data='%s'" % img.unpack('H*'))
	pst.execute
	rescue SystemCallError => e
		puts e
	ensure file.close if file
end
