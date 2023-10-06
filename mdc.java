import java.util.Scanner;

public class mdc {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("A=");
        int A = scanner.nextInt();
        System.out.println("B=");
        int B = scanner.nextInt();
        int mdc = 0;
        if (A < B) {
            for (int i = 1; i <= B; i++) {
                if (A % i == 0 && B % i == 0) {
                    mdc = i;
                }
            }
        } else if (B < A) {
            for (int i = 1; i <= A; i++) {
                if (A % i == 0 && B % i == 0) {
                    mdc = i;
                }
            }
        } else {
            mdc = A; // A and B are equal, so GCD is A or B.
        }
        System.out.println(mdc);
        scanner.close();
    }

}