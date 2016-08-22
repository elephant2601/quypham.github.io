class Fixnum
	def hours
		self*3600
	end
	def minutes
		self*60
	end
end
puts Time.now + 5.hours + 10.minutes