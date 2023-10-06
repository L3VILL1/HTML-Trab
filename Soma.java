public class soma {

	public static void main(String[] args) {
		int[] num = {10, 70, 95, 25, 15};
		int soma = 0;
		for (int i = 0; i<num.length; i++) {
			soma += num[i];
		}
		System.out.println("A soma dos números foi:"+soma);
	}
}
