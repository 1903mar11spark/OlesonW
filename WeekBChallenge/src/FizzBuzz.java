
public class FizzBuzz {

	public static void fizzBuzz1(int i){


		if(i % 15 == 0) {
			System.out.println("FizzBuzz");
		}else if(i % 5 == 0) {
			System.out.println("Buzz");

		}else if(i % 3 == 0) {
			System.out.println("Fizz");

		}else {
			for(int i1 = 0; i1 <=100; i1++) {
				System.out.println(i1);
			}
	    }
	}

	public static void fizzBuzz2(int m,int n){

		for(int i = m; i <=n; i++) {
			System.out.println(i);

			if(i % 15 == 0) {
				System.out.println("FizzBuzz");
			}else if(i % 5 == 0) {
				System.out.println("Buzz");

			}else if(i % 3 == 0) {
				System.out.println("Fizz");

			}

	     }

	}

	public static void fizzBuzz3(int m, int n, int fizzNum, int buzzNum){
		int z = fizzNum + buzzNum;
		for(int i = m; i <=n; i++) {
			System.out.println(i);

			if(i % fizzNum == 0 && i % buzzNum == 0) {
				System.out.println("FizzBuzz");
			}else if(i % buzzNum == 0) {
				System.out.println("Buzz");
			}else if(i % fizzNum == 0) {
				System.out.println("Fizz");
			}
		}

	}

	// public static void fizzBuzz4(int m, int n, int[] numbers, String[] terms){
	// 	for(int i = m; i <=n; i++) {
	// 		System.out.println(i);

	// 		if(i % numbers[0] == 0 && i % numbers[1] == 0) {
	// 			System.out.println(terms[2]);
	// 		}else if(i % numbers[1] == 0) {
	// 			System.out.println(terms[1]);
	// 		}else if(i % numbers[0] == 0) {
	// 			System.out.println(terms[0]);
	// 		}
	// 	 }

	//  }

  public static void fizzBuzz4(int m, int n, int[] numbers, String[] terms){
    for(int i = m; i <=n; i++) {
      System.out.println(i);

      if(i % 2 == 0){
        System.out.println(terms[1]);
      }else{
        System.out.println(terms[0]);
      }

     }

   }

}

