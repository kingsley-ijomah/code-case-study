class MyClass
  @my_var = 1

  def self.read; @my_var; end
  def write; @my_var = 2; end
  def read; @my_var; end
end

obj = MyClass.new
obj.write
p "obj.read: ", obj.read
p "MyClass.read ", MyClass.read
