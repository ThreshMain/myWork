import java.awt.Color;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.swing.JFrame;

public class BrightSet {
	public static int bright;
	public static void main(String[] args) throws IOException {
		setBrightness(getBrightness()+Integer.valueOf(args[0]));
	}

	public static void setBrightness(int brightness) throws IOException {
		// Creates a powerShell command that will set the brightness to the requested
		// value (0-100), after the requested delay (in milliseconds) has passed.
		String s = String.format("$brightness = %d;", brightness) + "$delay = 0;"
				+ "$myMonitor = Get-WmiObject -Namespace root\\wmi -Class WmiMonitorBrightnessMethods;"
				+ "$myMonitor.wmisetbrightness($delay, $brightness)";
		String command = "powershell.exe  " + s;
		//System.out.println(s);
		// Executing the command
		Process powerShellProcess = Runtime.getRuntime().exec(command);

		powerShellProcess.getOutputStream().close();

		// Report any error messages
		String line;

		BufferedReader stderr = new BufferedReader(new InputStreamReader(powerShellProcess.getErrorStream()));
		line = stderr.readLine();
		if (line != null) {
			System.err.println("Standard Error:");
			do {
				System.err.println(line);
			} while ((line = stderr.readLine()) != null);

		}
		stderr.close();
	}
	public static int getBrightness() throws IOException{
		String currnetBright="powershell.exe (Get-Ciminstance -Namespace root/WMI -ClassName WmiMonitorBrightness).CurrentBrightness";
		Process powerShellProcess = Runtime.getRuntime().exec(currnetBright);

		powerShellProcess.getOutputStream().close();

		String out="";
		String line;
		BufferedReader stderr = new BufferedReader(new InputStreamReader(powerShellProcess.getInputStream()));
		line = stderr.readLine();
		if (line != null) {
			do {
				out+=line;
			} while ((line = stderr.readLine()) != null);

		}
		stderr.close();
		return Integer.valueOf(out);
	}
}
