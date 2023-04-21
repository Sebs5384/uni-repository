#include <iostream>
#include <cstdlib>
#include <ctime>
#include <vector>
#include <algorithm>

using namespace std;



int main() {

    int i;
    int rangoMinimo;
    int rangoMaximo;
    int intentosMaximos;
    int numeroAleatorio;
    int adivinanza;
    int intentosRestantes;
    bool adivinanzaRepetida;
    vector<int> numerosUsados;

    cout << "Porfavor introduzca un rango minimo para el juego: " << endl;
    cin >> rangoMinimo;
    cout << "Ahora introduzca un rango maximo para el juego: " << endl;
    cin >> rangoMaximo;
    cout << "Cuantos intentos deseas tener en esta partida? " << endl;
    cin >> intentosMaximos;

    if (rangoMinimo > rangoMaximo) {
        int $rangoMaximo = rangoMinimo; 
        rangoMinimo = rangoMaximo;
        rangoMaximo = $rangoMaximo;  
    }

    srand(time(NULL));
    numeroAleatorio = rand() % (rangoMaximo - rangoMinimo + 1) + rangoMinimo;
    cout << numeroAleatorio << endl;

    cout << "Podes adivinar el numero aleatorio entre tus inputs? " << rangoMinimo << " y " << rangoMaximo << " tenes estos intentos: " << intentosMaximos << endl;

    for (i = 0; i < intentosMaximos; i++) {

        cin >> adivinanza;
        adivinanzaRepetida = false;
        intentosRestantes = (intentosMaximos - (i + 1));
        
        for (int j = 0; j < numerosUsados.size(); j++) {
            if (numerosUsados[j] == adivinanza) {
                i--;
                cout << "Ya usaste este numero, intenta otro !" << endl;
                adivinanzaRepetida = true;
                break;
            }
        }

        if (adivinanza == numeroAleatorio) {
            cout << "Adivinazte! el numero aleatorio era: " << numeroAleatorio << endl;
            break;
        }
        else if ((i + 1) == intentosMaximos) {
            cout << "Se acabaron tus intentos, perdiste !" << endl;
            break;
        } 
        
        if (!adivinanzaRepetida) {

            if (adivinanza < numeroAleatorio) {
                cout << "Tu adivinanza es de menor valor a tu numero aleatorio, intenta de nuevo !" << endl;
                cout << "Te quedan esta cantidad de intentos: " << intentosRestantes << endl;
            }
            else if (adivinanza > numeroAleatorio) {
                cout << "Tu adivinanza es de mayor valor a tu numero aleatorio, intenta de nuevo !" << endl;
                cout << "Te quedan esta cantidad de intentos: " << intentosRestantes << endl;
            }
            numerosUsados.push_back(adivinanza);
        }

        sort(numerosUsados.begin(), numerosUsados.end());
        cout << "Los numeros que utilizaste hasta ahora son: ";
        for (int k = 0; k < numerosUsados.size(); k++) {
            cout << numerosUsados[k] << ", ";
        }
        cout << endl;
       
    }

    return 0;
}