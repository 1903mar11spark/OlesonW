package com.revature.example;
import com.revature.transport.Kayak;
import java.util.Iterator;
import java.util.*;

public class Wednesday {
	
	public static void main(String[] args) {
//		funWithEqualsAndHashcode();
		
	
		ArrayList<Kayak> ar1 = new ArrayList<>();
		ArrayList<Kayak> ar2 = new ArrayList<>();
		
		Kayak k1 = new Kayak(7.2, "red");
		Kayak k2 = new Kayak(8.3, "green");
		Kayak k3 = new Kayak(8.3, "yellow");
		Kayak k4 = new Kayak(10, "aqua");
		Kayak k5 = new Kayak(8.3, "green");
		Kayak k6 = new Kayak(8.3, "orange");
		
		ar1.add(k1);
		ar1.add(k2);
		ar1.add(k3);
		
		ar2.add(k4);
		ar2.add(k5);
		ar2.add(k6);
		
		System.out.println(stepThroughCollections(ar1, ar2));
		

	}
	
	
	static <E> E stepThroughCollections(Collection<E> c1, Collection<E> c2) {
		//this will iterate through 2 collections of same type, and return the 
		// matching element. They need to be same size, or returns null
		E match = null;
		
		
		Iterator<E> i1 = c1.iterator();
		Iterator<E> i2 = c2.iterator();
		
		while (i1.hasNext() && i2.hasNext()) {
			E e = i1.next();
			if(e.equals(i2.next())) {
				match = e;
				break;
			}
		}
		return match;
	}
	
	
	static void funWithEqualsAndHashcode() {
		
		Kayak k1 = new Kayak(7.2, "red");
		Kayak k2 = new Kayak(8.3, "green");
		Kayak k3 = new Kayak(8.3, "green");
		
		
		
		if(k1 == k2) {
			System.out.println("k1 and k2 same");
		} else {
			System.out.println("k1 and k2 are not same");
		}
		
		if(k1.equals(k2)) {
			System.out.println("k1 and k2 same .equals");
		}else {
			System.out.println("k1 and k2 not same .equals");
		}
		
		System.out.println("k1 hashcode value: "+k1.hashCode());
		System.out.println("k2 hashcode value: "+k2.hashCode());
		
		Kayak k4 = new Kayak(2.5, "red");
		
		System.out.println("k3 hashcode value: "+k3.hashCode());
		}

}
