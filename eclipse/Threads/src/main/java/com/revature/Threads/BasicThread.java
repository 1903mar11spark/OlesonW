package com.revature.Threads;

public class BasicThread extends ThreadIntro {

	@Override 
	public void run() {
		while(true) {
			System.out.println("potato");
		}
	}
}
