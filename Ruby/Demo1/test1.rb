class Contacts
  puts "\tCONTACTS\n
        To add members: list.add_member('name', telephone_number)\n
        To search by ID: list.search_id(id)\n
        To search by name: list.search_name('name')\n
        To search by telephone number: list.search_number(telephone_number)"

  @@id_num = 0
  @@id = []
  @@name = []
  @@telephone_number = []
  @@id_num
  def add_member(name, telephone_number)
    @@id_num += 1
    file = File.open("contacts.txt", "a+")
    file.syswrite("#{@@id_num}\t#{name}\t#{telephone_number}\n")
    @@id.push(@@id_num)
    @@name.push(name)
    @@telephone_number.push(telephone_number)
  end

  def search_id(id)
    @@id.each_index do |element|
      if element == (id - 1)
        puts element
        #show_info
      else
        puts "id doesn't exist"
      end
    end
  end

  def search_name(name)
    @@name.each_index do |element|
      if element == name
        puts element
        #show_info
      else
        puts "name doesn't exist"
      end
    end
  end

  def search_number(telephone_number)
    @@telephone_number.each_index do |element|
      if element == telephone_number
        puts element
        #show_info
      else
        puts "telephone_number doesn't exist"
      end
    end
  end

end
