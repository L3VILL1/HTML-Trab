import java.util.Scanner;
public class Primo {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("Digite um número inteiro positivo: ");
		int numero = scanner.nextInt();
		boolean ehprimo = verificarprimo(numero);
		if (ehprimo) {
            System.out.println(numero + " é primo.");
        } else {
            System.out.println(numero + " não é primo.");
        }

        scanner.close();
	}
	public static boolean verificarprimo(int numero) {
		if (numero<=1) {
			return false;
		}
		for (int i = 2; i <(numero); i++) {
			if (numero%i==0){
				return false;
			}
		}
		return true;
	}

}
