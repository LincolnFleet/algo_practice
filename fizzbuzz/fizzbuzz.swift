// shebang??
let number = [1,2,3,4,5,6,7,8,9,10]

for num in number {
  print("\(num) \(num%3 || "fizz")\(num%5 || "buzz")")
}