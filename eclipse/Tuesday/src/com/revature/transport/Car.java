package com.revature.transport;

public class Car extends Vehicle implements Steerable{
	
	public Car() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Car(int yearMade, String make, String model) {
		super();
		this.yearMade = yearMade;
		this.make = make;
		this.model = model;
	}

	private int yearMade;
	private String make;
	private String model;

	@Override
	public void move() {
		System.out.println("Car is driving");
	}

	public int getYearMade() {
		return yearMade;
	}

	public void setYearMade(int yearMade) {
		this.yearMade = yearMade;
	}

	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	@Override
	public String toString() {
		return "Car [yearMade=" + yearMade + ", make=" + make + ", model=" + model + "]";
	}

	@Override
	public void turnRight() {
		System.out.println("turning right/clockwise");
	}

	@Override
	public void turnLeft() {
		System.out.println("turning left/counterclockwise");
	}

}
