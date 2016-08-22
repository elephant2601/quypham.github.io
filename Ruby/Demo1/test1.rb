def new_file(file_name)
	file = File.new(file_name + ".txt", "a+")
	$file_name = file_name
	file.close
end

def add_to_file(name, position, birthday)
	if $file_name
		file = File.open($file_name + ".txt", "a+")
		#@name = file.sysread(name.length)
		#@position = file.sysread(position.length + 1)
		#@birthday = file.sysread(birthday.length + 1)
		#if @name ==  && @position
		file.syswrite("#{name}\t#{position}\t#{birthday}\n")
	else
		puts "Unable to open file!\nPlease create file first!"
	end
end

