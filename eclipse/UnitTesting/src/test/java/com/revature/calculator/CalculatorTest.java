package com.revature.calculator;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.BeforeClass;




import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

public class CalculatorTest {
	
	double z = 0;
	double q = 0;

	private Calculator calc = new Calculator();
	
	@Test 
	public void additionTest() {
	//Calculator.add is accessing it in static way
		assertThat(Calculator.add(2d, 4d), is(equalTo(6d))); //alternate below
		assertTrue(calc.addition(2d, 4d) == 6d);
		assertThat(calc.add(2d, -2d), is(equalTo(0d)));
	}
	
	@Test 
	public void subtractTest() {
		//Calculator.subract is accessing it in a static way
		assertThat(Calculator.subtract(4d, 2d), is(equalTo(2d))); //alternate below
		assertTrue(calc.subtraction(2d, -2d) == 4d);
		assertTrue(calc.subtraction(-2d, -2d) == 0d);

	}
	
	
	@Test 
	public void multTest() {
		//Calculator.subract is accessing it in a static way
		assertThat(Calculator.mult(-4d, 2d), is(equalTo(-8d))); //alternate below
		assertTrue(calc.mult(2d, 0d) == 0d);
	}
	
	@Test 
	public void divTest() {
		//Calculator.subract is accessing it in a static way
		assertThat(Calculator.div(-8d, 2d), is(equalTo(-4d))); //alternate below
		assertTrue(calc.div(2d, 4d) == 0.50d);
	}
	
	@Test 
	public void averageTest() {
		//Calculator.subract is accessing it in a static way
		assertThat(Calculator.average(8d,4d, 8d, 4d), is(equalTo(6d))); //alternate below
//		assertTrue(calc.average(2d, 4d) == 0.50d);
	}
	
	@Test 
	public void expoTest() { //exponents, to the power of
		assertThat(Calculator.expo(2d, 3), is(equalTo(8d)));
		assertThat(Calculator.expo(1d, 1), is(equalTo(1d))); 
		assertThat(Calculator.expo(0d, 15), is(equalTo(0d))); 
		assertThat(Calculator.expo(-2d, 3), is(equalTo(-8d))); 
		assertThat(Calculator.expo(2d, -3), is(equalTo(1/(8d)))); 
		assertThat(Calculator.expo(2d, 0), is(equalTo(1d))); 



	}
	
	//if you want to set variables z and q to use instead of numbers in tests
	@Before
	public void beforeEachTest() {
	    this.z = 2;
		this.q = 4;
	}
	
	@After
	public void afterEachTest() {
		this.z = 0;
		this.q = 0;
	}
	
	@BeforeClass 
	public static void beforeClass() {
//		System.out.println("Before test (beforeClass)");
		
	}
	
	@AfterClass 
	public static void afterClass() {
//		System.out.println("After test (afterClass)");

	}
}

// find average
//2 numbers, find the power (exponential)
