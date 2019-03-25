
public class FizzTest extends FizzBuzz {
		
	public static void main(String[] args) {
//		FizzBuzz fb = new FizzBuzz();
		FizzBuzz.fizzBuzz1(3);
		FizzBuzz.fizzBuzz1(10);
		FizzBuzz.fizzBuzz1(15);
		FizzBuzz.fizzBuzz2(30, 50);
		FizzBuzz.fizzBuzz3(20, 100, 2, 5);
		String[] str = new String[]{"fizz", "buzz", "fizzbuzz"};
		int[] nums = {6, 8};
		FizzBuzz.fizzBuzz4(1, 24, nums, str);
	}

}