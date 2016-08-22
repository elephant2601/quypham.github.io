#!/usr/bin/ruby
#require 'rubygems'
require 'mysql'



begin
  con = Mysql.new 'localhost', 'elephant', '2601', 'quysql'

  con.query("CREATE TABLE IF NOT EXISTS \
    Writers(Id INT PRIMARY KEY AUTO_INCREMENT, Name VARCHAR(25))")
  con.query("INSERT INTO Writers(Name) VALUES('London')")
  con.query("INSERT INTO Writers(Name) VALUES('Paris')")
  con.query("INSERT INTO Writers(Name) VALUES('Balzac')")
  con.query("INSERT INTO Writers(Name) VALUES('Lion')")
  con.query("INSERT INTO Writers(Name) VALUES('Truman')")
rescue Mysql::Error => e
  puts e.errno
  puts e.error

ensure
  con.close if con
end
