import java.util.Scanner;
public class fibonacci {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("digite o numero de termos a serem gerados:");
		int N = scanner.nextInt();
		long[] fibonacci = new long[N];
		fibonacci[0] = 0;
		fibonacci[1] = 1;
		for (int i = 2;i < N; i++ ) {
			fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
		}
		for (int i = 0; i < N; i++) {
            System.out.print(fibonacci[i] + " ");
        }
		scanner.close();
	}
}
