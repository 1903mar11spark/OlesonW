package com.revature.calculator;

import java.util.ArrayList;


public class Calculator {
	
	public static void main(String[] args) {
		System.out.println(addition(20, 15));
		System.out.println(add(2, -2));
		
		System.out.println(subtract(20, 15));
		System.out.println(subtraction(3, 6));
		
		System.out.println(mult(1, 15));
		System.out.println(mult(-2, 2));
		
		System.out.println(div(3, 9));
		System.out.println(div(-8, 2));
		
		System.out.println(average(8, 4, 8, 4));
		System.out.println(expo(2, 3));
		System.out.println(expo(2, -3));



	}

	public static double addition(double a, double b) {
		double x = a + b;
		return x;
	}

	public static Double add(double d, double e) {
		double x = d + e;
		return x;
	}

	public static Double subtract(double d, double e) {
		double x = d - e;
		return x;
	}

	public static double subtraction(double d, double e) {
		double x = d - e;
		return x;
	}

	public static Double mult(double d, double e) {
		double x = d * e;
		return x;
	}

	public static Double div(double d, double e) {
		double x = d/e;
		return x;
	}

	public static Double average(double d, double e, double f, double g) {
		double[] ar1 = {d, e, f, g};
		double x = d + e + f+ g;
		double z = x/ar1.length;
		return z;
	}

	public static Double expo(double d, int e) {
		if (e==0) {
	            return 1.0;
	        }
	        
	        if(e>0) {
	            
	        double temp=1.0;
	        for (int i=0;i<e;i++) {
	            temp=temp*d;   
	        }
	        return temp;
	        }
	        
	        else {
	            e= -1*e;
	
	            double temp=1;
	        for (int i=0;i<e;i++) {
	            temp=temp*d;
	            
	        }
	        double j=1/temp;
	        return j;
	        
	        }
	}
//	
	
}
