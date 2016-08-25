class Contacts
  @@contacts_num = {}
  @@contacts_time = {}

  # add new member
  def add_member(name, telephone_number)
    name.downcase!
    @name = name
    @number = telephone_number
    check_name
    check_number
    if @check_name && @check_number
      name_arr = @@contacts_num.keys
      tele_number_arr = @@contacts_num.values
      if name_arr.include? name
        puts "Name already exists!"
      elsif tele_number_arr.include? telephone_number
        puts "Telephone number already exists!"
      else
        now = Time.new
        time_created = "#{now.day}/#{now.month}/#{now.year} at #{now.hour}:#{now.min}"
        begin
          file = File.open("contacts.txt", "a")
          file.syswrite("#{name}: #{telephone_number} #{time_created}\n")
          @@contacts_num.store(name, telephone_number)
          @@contacts_time.store(name, time_created)
        rescue
          file = File.new("contacts.txt", "a")
        end
      end
    end
  end

  # search existing members by name
  def search_by_name(name)
    name.downcase!
    @name = name
    check_name
    if @check_name
      name_arr = @@contacts_num.keys
      if name_arr.include? name
        show_info
      else
        puts "Name doesn't exist!"
      end
    end
  end

  # find existing members by telephone number
  def search_by_number(telephone_number)
    @number = telephone_number
    check_number
    if @check_number
      tele_number_arr = @@contacts_num.values
      if tele_number_arr.include? telephone_number
        @name = @@contacts_num.key(telephone_number)
        show_info
      else
        puts "Telephone number doesn't exist!"
      end
    end
  end

  # check the correct names fill
  def check_name
    pattern = /\D/
    if @name =~ pattern
      @check_name = true
    else
      puts "#{@name} isn't a name!"
      @check_name = false
    end
  end

  # check the correct telephone number fill
  def check_number
    pattern = /\D/
    if @number =~ pattern
      puts "#{@number} isn't a number!"
      @check_number = false
    else
      @check_number = true
    end
  end

  # show all member in contact
  def show_all
    @@contacts_num.each_key do |name|
      puts "#{name}: #{@@contacts_num[name]} #{@@contacts_time[name]}"
    end
  end

  # show member's infomation
  def show_info
    puts "#{@name}: #{@@contacts_num[@name]} #{@@contacts_time[@name]}"
  end
end
