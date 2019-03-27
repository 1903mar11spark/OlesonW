import java.util.TreeMap;

public class Main {

	public static void main(String[] args) {
		TreeMap<String, String> food = new TreeMap<String, String>();
			
			food.put("emily", "kiwi");
			food.put("edgar", "pizza");
			food.put("will", "quesadilla with green onions");
			
			System.out.println(food.get("emily"));
			System.out.println(food.get("edgar"));
			System.out.println(food.get("will"));
						
		
			for(String i : food.keySet()) {
				System.out.println(food.get(i)); 
				//prints out values based on key alphabetical order
			}
			
			System.out.println(food.firstEntry());
			System.out.println(food.lastEntry());
			System.out.println(food.containsValue("kiwi"));
			System.out.println(food.containsValue("anchovies"));
			System.out.println(food.containsKey("boaty mcboatface"));


	}
}
