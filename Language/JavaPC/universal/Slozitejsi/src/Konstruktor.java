
public class Konstruktor {
	String jmeno;
	int hp;
	int sila;
	int inteligence;
	boolean b = true;

	public Konstruktor(String jmeno, int hp, int sila, int inteligence) {
		this.jmeno = jmeno;
		this.hp = hp;
		this.sila = sila;
		this.inteligence = inteligence;
	}

	public String getJmeno() {
		return jmeno;
	}

	public void setJmeno(String jmeno) {
		this.jmeno = jmeno;
	}

	public int getHp() {
		return hp;
	}

	public void setHp(int hp) {
		this.hp = hp;
	}

	public int getSila() {

		return sila;
	}

	public void setSila(int sila) {
		if (sila + inteligence > 10) {
			System.out.println("Sou�et s�ly a inteligence nesm� b�t v�t�� ne� 10");
			b = false;
			this.sila = sila;
		} else {
			this.sila = sila;
			b = true;
		}
	}

	public int getInteligence() {
		return inteligence;
	}

	public void setInteligence(int inteligence) {
		if (sila + inteligence > 10) {
			System.out.println("Sou�et s�ly a inteligence nesm� b�t v�t�� ne� 10");
			b = false;
			this.inteligence = inteligence;
		} else {
			this.inteligence = inteligence;
			b = true;
		}
	}

	public String Stats() {
		return "Staty postavy " + jmeno + " jsou: inteligence - " + inteligence + ", s�la - " + sila
				+ ", po�et �ivot� - " + hp + ".";
	}

}
