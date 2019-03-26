package com.revature.transport;

public class Kayak extends Vehicle implements Steerable{
	
	private double length;
	private String color;

	
	public Kayak() {
		super();
	}

	public Kayak(double length, String color) {
		super();
		this.length = length;
		this.color = color;
	}


	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		this.length = length;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
	
	@Override
	public void move() {
		System.out.println("kayak is moving");
	}

	@Override
	public void turnRight() {
		System.out.println("padding on left");
	}

	@Override
	public void turnLeft() {
		System.out.println("padding on right");
	}

	@Override
	public String toString() {
		return "Kayak [length=" + length + ", color=" + color + "]";
	}

}
