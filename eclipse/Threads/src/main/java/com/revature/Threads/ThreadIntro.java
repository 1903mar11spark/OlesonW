package com.revature.Threads;

public class ThreadIntro {
	
	private static final Runnable BasicThread = null;
	BasicThread t = new BasicThread();
	Thread t2 = new Thread(BasicThread);
	
	
	public void run() {
		System.out.println("thread intro");
	}
	

	
}
