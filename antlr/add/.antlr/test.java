package Yahtzee;
import java.net.*;
import java.io.*;


public class YahtzeeServerThread extends Thread {

	
  private Socket YahtzeeSocket = null;
  private SharedYahtzeeState mySharedYahtzeeStateObject;
  private String myYahtzeeServerThreadName;
  private double mySharedVariable;
   
  //Setup the thread
  	public YahtzeeServerThread(Socket actionSocket, String ActionServerThreadName, SharedYahtzeeState SharedObject) {
	
//	  super(ActionServerThreadName);
	  this.YahtzeeSocket = actionSocket;
	  mySharedYahtzeeStateObject = SharedObject;
	  myYahtzeeServerThreadName = ActionServerThreadName;
	}

  	
  	
  public void run() {
    try {
      System.out.println(myYahtzeeServerThreadName + " initialising.");
      PrintWriter out = new PrintWriter(YahtzeeSocket.getOutputStream(), true);
      BufferedReader in = new BufferedReader(new InputStreamReader(YahtzeeSocket.getInputStream()));
      String inputLine, outputLine;
      mySharedYahtzeeStateObject.processName(myYahtzeeServerThreadName);
      
      while ((inputLine = in.readLine()) != null) {
    	  
    	  
    	  // Get a lock first
    	  try { 
    		  mySharedYahtzeeStateObject.acquireLock();  
    		  //System.out.println(inputLine);
    		  outputLine = mySharedYahtzeeStateObject.processInput(myYahtzeeServerThreadName, inputLine);
    		  //System.out.println(outputLine);
    		  mySharedYahtzeeStateObject.releaseLock();  
    	  } 
    	  catch(InterruptedException e) {
    		  System.err.println("Failed to get lock when reading:"+e);
    	  }
      }

       out.close();
       in.close();
       YahtzeeSocket.close();

    } catch (IOException e) {
      e.printStackTrace();
    }
  }
  
public class SharedYahtzeeState{
	
	private SharedYahtzeeState mySharedObj;
	private String myThreadName;
	private double mySharedVariable;
	private boolean accessing=false; // true a thread has a lock, false otherwise
	private int threadsWaiting=0; // number of waiting writers
	private PrintWriter out = null;
	private BufferedReader in = null;
	private  ArrayList<String> playerList = new ArrayList<String>();
	private  ArrayList<Boolean> OrderofP = new ArrayList<Boolean>();
// Constructor	
	
	SharedYahtzeeState(double SharedVariable) {
		mySharedVariable = SharedVariable;
	}

//Attempt to aquire a lock
	  public synchronized void acquireLock() throws InterruptedException{
	        Thread me = Thread.currentThread(); // get a ref to the current thread
	        //System.out.println(me.getName()+" is attempting to acquire a lock!");	
	        ++threadsWaiting;
		    while (accessing) {  // while someone else is accessing or threadsWaiting > 0
		     // System.out.println(me.getName()+" waiting to get a lock as someone else is accessing...");
		      //wait for the lock to be released - see releaseLock() below
		      wait();
		    }
		    // nobody has got a lock so get one
		    --threadsWaiting;
		    accessing = true;
		   // System.out.println(me.getName()+" got a lock!"); 
		  }

		  // Releases a lock to when a thread is finished
		  
		  public synchronized void releaseLock() {
			  //release the lock and tell everyone
		      accessing = false;
		      notifyAll();
		      Thread me = Thread.currentThread(); // get a ref to the current thread
		      //System.out.println(me.getName()+" released a lock!");
		    
		  }
		    

    /* The processInput method */

		  public synchronized void processName(String myThreadName) {
			  playerList.add(myThreadName);
			  OrderofP.add(false);
			
		  }
		  private void playorder(String myThreadName) {
			  
			  
		  } 
		  
			  
	public synchronized String processInput(String myThreadName, String theInput) {
    	String theOutput=null;
    	
    	
    	
    	if (theInput.contentEquals("ASKSTARTROUND")); {
			System.out.println(playerList.size());
			
			
			if (playerList.size()>3);
			
			out.println("go");
			
		}    	
    	if (theInput.contentEquals("ASKSTARTROUND2")) {
			System.out.println();
			

		}
    		return theOutput;
    	}	
	
}
}

