
import { CurrencyType } from "@/types/currency";

export const currencies: CurrencyType[] = [
  {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee",
    rate: 83.5 // Conversion rate from USD
  },
  {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    rate: 1
  },
  {
    code: "EUR",
    symbol: "€",
    name: "Euro",
    rate: 0.93
  },
  {
    code: "GBP",
    symbol: "£",
    name: "British Pound",
    rate: 0.8
  },
  {
    code: "JPY",
    symbol: "¥",
    name: "Japanese Yen",
    rate: 150.5
  },
  {
    code: "CNY",
    symbol: "¥",
    name: "Chinese Yuan",
    rate: 7.25
  },
  {
    code: "AUD",
    symbol: "A$",
    name: "Australian Dollar",
    rate: 1.5
  },
  {
    code: "CAD",
    symbol: "C$",
    name: "Canadian Dollar",
    rate: 1.37
  }
];
