import React, { useState } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { BarChart } from 'react-native-chart-kit';

function Expenses() {
  const screenWidth = Dimensions.get("window").width;

  const [selectedExpenseType, setSelectedExpenseType] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [expenseEntries, setExpenseEntries] = useState(Array(5).fill(Array(8).fill('')));
  const [budgets, setBudgets] = useState(Array(5).fill(Array(8).fill('')));
  const [displayTable, setDisplayTable] = useState(false);

  const expenseTypes = [
    { label: "School Staff", value: 0 },
    { label: "Building and Equipment", value: 1 },
    { label: "Student Needs", value: 2 },
    { label: "School Maintenance", value: 3 },
    { label: "Others", value: 4 },
  ];

  const months = [
    { label: "January", value: 0 },
    { label: "February", value: 1 },
    { label: "March", value: 2 },
    { label: "April", value: 3 },
    { label: "May", value: 4 },
    { label: "June", value: 5 },
    { label: "July", value: 6 },
    { label: "August", value: 7 },
    { label: "September", value: 8 },
    { label: "October", value: 9 },
    { label: "November", value: 10 },
    { label: "December", value: 11 },
  ];

  const handleEnter = () => {
    if (selectedExpenseType !== null && selectedMonth !== null) {
      setDisplayTable(true);
    }
  };

  const handleInputChange = (text, expenseIndex, rowIndex) => {
    const updatedEntries = [...expenseEntries];
    updatedEntries[expenseIndex][rowIndex] = text;
    setExpenseEntries(updatedEntries);
  };

  const handleBudgetChange = (text, expenseIndex, rowIndex) => {
    const updatedBudgets = [...budgets];
    updatedBudgets[expenseIndex][rowIndex] = text;
    setBudgets(updatedBudgets);
  };

  // Function to safely get the total
  const getTotal = (entries) => {
    return entries.reduce((total, entry) => {
      const entryValue = parseFloat(entry) || 0; // Ensure entryValue is a number or 0
      return total + entryValue;
    }, 0).toFixed(2);
  };

  // Prepare data for the chart
  const chartData = {
    labels: expenseTypes.map((type, index) => {
      switch (index) {
        case 0: return 'SS';
        case 1: return 'BE';
        case 2: return 'SN';
        case 3: return 'SM';
        case 4: return 'O';
        default: return '';
      }
    }), // Modify labels for x-axis
    datasets: [
      {
        data: expenseTypes.map(expenseTypeIndex =>
          budgets[expenseTypeIndex] && budgets[expenseTypeIndex].length > 0
            ? budgets[expenseTypeIndex].reduce((acc, budget) => acc + (parseFloat(budget) || 0), 0)
            : 0
        ),
        
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>MONTHLY EXPENSES</Text>
      </View>
      <View style={styles.selectionContainer}>
        <Dropdown
          data={expenseTypes}
          labelField="label"
          valueField="value"
          placeholder="Select Expense"
          value={selectedExpenseType}
          onChange={item => setSelectedExpenseType(item.value)}
          style={styles.dropdown}
          placeholderStyle={styles.placeholderText}
          selectedTextStyle={styles.dropdownText}
          itemTextStyle={styles.dropdownItemText}
        />
        <Dropdown
          data={months}
          labelField="label"
          valueField="value"
          placeholder="Select Month"
          value={selectedMonth}
          onChange={item => setSelectedMonth(item.value)}
          style={styles.dropdown}
          placeholderStyle={styles.placeholderText}
          selectedTextStyle={styles.dropdownText}
          itemTextStyle={styles.dropdownItemText}
        />
        <TouchableOpacity style={styles.button} onPress={handleEnter}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
      {displayTable && (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.chartContainer}>
            <View style={styles.chartBorder}>
              <BarChart
                data={chartData}
                width={screenWidth - 40}
                height={220}
                yAxisLabel="$"
                chartConfig={{
                  backgroundColor: 'white',
                  backgroundGradientFrom: 'white',
                  backgroundGradientTo: 'white',
                  decimalPlaces: 2,
                  color: (opacity = 1) => rgba(0, 0, 0, ${opacity}),
                  labelColor: (opacity = 1) => rgba(0, 0, 0, ${opacity}),
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: 'cyan',
                  },
                }}
                style={styles.chart}
              />
            </View>
          </View>
          <View style={styles.tableWrapper}>
            {expenseTypes.map((type, typeIndex) => (
              typeIndex === selectedExpenseType && (
                <View key={typeIndex} style={styles.expenseContainer}>
                  <DataTable>
                    <DataTable.Header style={styles.tableHeader}>
                      <DataTable.Title style={styles.tableTitle}>                      Entry</DataTable.Title>
                      <DataTable.Title style={styles.tableTitle}>                    Budget</DataTable.Title>
                    </DataTable.Header>
                    {Array(8).fill(null).map((_, rowIndex) => (
                      <DataTable.Row key={rowIndex} style={styles.tableRow}>
                        <DataTable.Cell style={styles.tableCell}>
                          <TextInput
                            style={styles.tableInput}
                            placeholder="Enter Expense"
                            value={expenseEntries[typeIndex][rowIndex]}
                            onChangeText={(text) => handleInputChange(text, typeIndex, rowIndex)}
                          />
                        </DataTable.Cell>
                        <DataTable.Cell style={styles.tableCell}>
                          <TextInput
                            style={styles.tableInput}
                            placeholder="Enter Budget"
                            value={budgets[typeIndex][rowIndex]}
                            onChangeText={(text) => handleBudgetChange(text, typeIndex, rowIndex)}
                          />
                        </DataTable.Cell>
                      </DataTable.Row>
                    ))}
                    <DataTable.Row style={styles.totalRow}>
                      <DataTable.Cell style={styles.totalCell}>
                        <Text style={styles.totalText}>Total</Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={styles.totalCell}>
                        <Text style={styles.totalText}>{getTotal(budgets[typeIndex])}</Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>
                </View>
              )
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6c1cd',
  },
  headerContainer: {
    left: -18,
    marginLeft: 55,
    marginTop: 50,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: 'white',
    marginHorizontal: 20,
    height: 50,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 28,
    color: '#FFD700',
    textShadowOffset: { width: -1, height: 1 },
    textShadowColor: 'black',
    textShadowRadius: 1,
    fontWeight: 'bold',
  },
  selectionContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 17,
    backgroundColor: '#fefec9',
    borderRadius: 16,
    margin: 20,
    marginTop: 30,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  dropdownText: {
    color: 'black',
    fontSize: 16,
  },
  dropdownItemText: {
    color: 'black',
  },
  placeholderText: {
    color: 'black',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'white',
    textAlign: 'center',
    padding: 10,
    borderRadius: 16,
    marginTop: 20,
    borderWidth: 1,
  },
  buttonText: {
    color: 'black',
  },
  scrollViewContent: {
    flexDirection: 'column',
  },
  chartContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  chartBorder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
  },
  chart: {
    borderRadius: 16,
  },
  tableWrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
  tableHeader: {
    backgroundColor: '#fefec9',
    borderWidth: 0.75,
    borderBottomColor: '#000',
  },
  tableTitle: {
    flex: 1,
  },
  tableRow: {
    backgroundColor: 'white',
  },
  tableCell: {
    borderColor: '#000',
    padding: 6,
    flex: 1,
  },
  tableInput: {
    borderWidth: 1,
    borderColor: '#000',
    left:26,
    padding: 11,
    textAlign: 'center',
  },
  totalRow: {
    borderTopColor: '#000',
    borderWidth: 1,
    backgroundColor: '#fefec9',
  },
  totalCell: {
    borderColor: '#000',
    padding: 9,
    flex: 1,
  },
  totalText: {
    left:63,
    color: 'black',
    textAlign: 'center',
  },
});

export default Expenses;
INSERT INTO [dbo].[expenses] ([entry], [Jan], [Feb], [Mar], [Apr], [May], [Jun], [date], [Jul], [Aug], [Sep], [Oct], [Nov], [Dec], [status])
VALUES 
('salary', 'Rs 456', 'Rs 456', 'Rs 956', 'Rs 426', 'Rs 256', 'Rs 411', GETDATE(), 'Rs 456', 'Rs 456', 'Rs 956', 'Rs 426', 'Rs 256', 'Rs 411', 1),
('furniture', 'Rs 456', 'Rs 456', 'Rs 956', 'Rs 426', 'Rs 256', 'Rs 411', GETDATE(), 'Rs 456', 'Rs 456', 'Rs 956', 'Rs 426', 'Rs 256', 'Rs 411', 1);
GO