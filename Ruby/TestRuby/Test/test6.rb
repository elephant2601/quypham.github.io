class Car
  def inspect
    "Cheap car"
  end
end

porsche = Car.new
porsche.inspect # => Cheap car
def porsche.inspect
  "Expensive car"
end

puts porsche.inspect # => Expensive car

# Các đối tượng khác không bị ảnh hưởng
other_car = Car.new
puts other_car.inspect # => Cheap car