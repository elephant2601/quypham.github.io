class Contacts
  puts "\tCONTACTS\n
        Please type 'list = Contacts.new' first\n
        To add members: list.add_member('name', telephone_number)\n
        To search by name: list.search_name('name')\n
        To search by telephone number: list.search_number(telephone_number)"

  @@contacts_num = {}
  @@contacts_time = {}

  def add_member(name, telephone_number)
    name.downcase!
    name_arr = @@contacts_num.keys
    tele_number_arr = @@contacts_num.values
    if name_arr.include? name
      puts "Name already exists!"
    elsif tele_number_arr.include? telephone_number
      puts "Telephone number already exists!"
    else
      now = Time.new
      time_created = "#{now.day}/#{now.month}/#{now.year} at #{now.hour}:#{now.min}"
      file = File.open("contacts.txt", "a")
      file.syswrite("#{name}: #{telephone_number} #{time_created}\n")
      @@contacts_num.store(name, telephone_number)
      @@contacts_time.store(name, time_created)
    rescue
      file = File.new("contacts.txt", "a")
    end
  end

  def search_name(name)
    @name = name.downcase!
    name_arr = @@contacts_num.keys
    if name_arr.include? name
      show_info
    else
      puts "Name doesn't exist!" 
    end
  end

  def search_number(telephone_number)
    tele_number_arr = @@contacts_num.values
    if tele_number_arr.include? telephone_number
      @name = @@contacts_num.key(telephone_number)
      show_info
    else
      puts "Telephone number doesn't exist!"
    end
  end

  def show_all
    @@contacts_num.each_key do |name|
      puts "#{name}: #{@@contacts_num[name]} #{@@contacts_time[name]}"
    end
  end
    
  def show_info
    puts "#{@name}: #{@@contacts_num[@name]} #{@@contacts_time[@name]}"
  end
end
