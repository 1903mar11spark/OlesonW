package com.revature.example;
import java.util.ArrayList;
import java.util.List;

import com.revature.transport.*; //does nothing except save typing

public class Tuesday {
	public static void main(String[] args) {
		System.out.println("hello world");
		funWithWrapperClasses();
		funWithTransport();
	}
	
	static void funWithTransport() {
		Kayak k1 = new Kayak(3.3, "yellow");
		Kayak k2 = new Kayak(4.4, "green");
		
		Car c = new Car(1999, "subaru", "wrx");
		Car c2 = new Car(1955, "ford", "thunderbird");
		
		Chairlift cl = new Chairlift(12, 950);
		
		List<Vehicle> vehicles = new ArrayList<>();
		vehicles.add(k2);
		vehicles.add(k2);
		vehicles.add(c);
		vehicles.add(c2);
		vehicles.add(cl);
		
		for(Vehicle v : vehicles) {
			System.out.println(v);
			v.move();
			if(v instanceof Steerable) { //chairlift isn't steerable
				//so we need to do instance of.  otherwise, we'll get a class
				//cast exception.  this is an unchecked exception
				((Steerable)v).turnLeft();
			}
		}		
	}
	
	static void funWithWrapperClasses() {
		//numeric integers primitives
		byte b = 5;
		short s = 6;
		int i = 7;
		long l = 8l;
//		float f = 9f;
//		double d = 10;
		
		Integer k = i; //autoboxing
		b = new Byte((byte)9);  //narrowing conv.  
		//downcasting to convert byte to an int 9. 
		
		//String to number conversions
		String str = "55.4";
		Double d = Double.parseDouble(str); //this will create a double value
		d = 77.4; //reassigning if we want.
		//get class of d
		System.out.println(d.getClass());
		//find out if it's a instance of a class
		boolean isDouble = (d instanceof java.lang.Double);
		System.out.println(isDouble);
	}


	@Override
	public String toString() {
		return "Tuesday [getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString()
				+ "]";
	}
}