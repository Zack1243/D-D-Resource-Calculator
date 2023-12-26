#define _CRT_SECURE_NO_WARNINGS
#include<iostream>
#include<iomanip>
using namespace std;
//#include<string>
#include<fstream>
#include <Windows.h>
#include <cstdlib>

//Name: Zachary Van Vorst

#include<iostream>
#include<iomanip>
using namespace std;
#include<fstream>
#include <time.h>
#include <Windows.h>

//Name: Zachary Van Vorst
class Carravan {
public:
	Carravan();
	~Carravan();
	void setData();
	void printData();
	void calc();
private:
	int water, hexes, food, people, days, sum, carraFood, carraWater;
};

Carravan::Carravan()
{
	water = 0;
	hexes = 0;
	food = 0;
	people = 0;
	days = 0;
	sum = 0;
}

Carravan::~Carravan()
{

}

void Carravan::setData()
{
	cout << "Enter the amount of people the carravan needs to provide for: ";
	cin >> people;
	cout << endl;
	cout << "Enter the number of hexes: ";
	cin >> hexes;
	cout << endl;
	cout << "Enter the carravan's water supply: ";
	cin >> carraWater;
	cout << endl;
	cout << "Enter the carravan's ration supply: ";
	cin >> carraFood;
	cout << endl;
}

void Carravan::calc()
{
	days = (hexes / 4);
	if (hexes % 4 != 0)
		days++;
	food = (days * people);
	water = (days * people);
	if (carraFood > food)
	{
		carraFood -= food;
		food = 0;
	}
	else
		food -= carraFood;
	if (carraWater > water)
	{
		carraWater -= water;
		water = 0;
	}
	else
		water -= carraWater;
	sum = (food*5) + (water*2);
}


void Carravan::printData()
{
	cout << "For " << days << " of travel the group needs to puchase..." << endl;
	cout << food << " rations." << endl;
	cout << water << " water." << endl;
	cout << "The total cost of water and food equates to " << sum << " silver." << endl;
}



int main()
{
	Carravan one;
	one.setData();
	one.calc();
	one.printData();
	return 0;
	
}
