import java.util.Scanner;

public class ContagemValoresInteiros {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o valor de N: ");
        int N = scanner.nextInt();        
        System.out.println("Digite os valores de entrada (separados por espaços): ");
        scanner.nextLine();
        String input = scanner.nextLine();
        String[] tokens = input.split(" ");
        int primeiroDado = Integer.parseInt(tokens[0]);
        int contador = 0;        
        for (int i = N; i <= primeiroDado; i++) {
            contador++;
        }
        System.out.println("Número de valores inteiros no intervalo: " + contador);
        scanner.close();
    }
}
