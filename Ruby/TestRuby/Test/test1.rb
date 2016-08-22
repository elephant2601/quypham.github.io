class Nhan
	$count = 0
    def initialize(w, h)
        @width, @height = w, h
        $count += 1
    end
    def areaNhan
        @width * @height
    end
    def areaChia
    	@width / @height
    end
    def areaTru
    	@width - @height
    end
end

s = Nhan.new(30, 15)
d = Nhan.new(30, 15)
a = s.areaNhan
b = s.areaChia
c = s.areaTru
puts "#{a}"
puts "#{b}"
puts "#{c}"
puts "#{$count}"
