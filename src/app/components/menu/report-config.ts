export enum REPORT {
  REPORT1 = "Report1",
  REPORT2 = "Report2",
  REPORT3 = "Report3",
  REPORT4 = "Report4",
}

export enum REPORT_TYPE {
  DATE = "date",
  DROPDOWN = "dropdown",
}

interface DynamicFiledRules {
  required: Boolean;
}

export interface DynamicFiledSetting {
  type: REPORT_TYPE;
  label: string;
  value: any;
  rules?: DynamicFiledRules;

  // add
  fieldName?: string;
}

export type DynamicFiled = { [x: string]: DynamicFiledSetting };
export type ReportModal = { [key in REPORT]?: DynamicFiled };

export const reportModel: ReportModal = {
  [REPORT.REPORT1]: {
    receiptDate: {
      type: REPORT_TYPE.DATE,
      label: "Receipt Date",
      value: null,
      rules: {
        required: true,
      },
    },
    store: {
      type: REPORT_TYPE.DROPDOWN,
      label: "Store",
      value: null,
      rules: {
        required: false,
      },
    },
    wareHouse: {
      type: REPORT_TYPE.DROPDOWN,
      label: "Warehouse",
      value: null,
      rules: {
        required: false,
      },
    },
    orderType: {
      type: REPORT_TYPE.DROPDOWN,
      label: "Order Type",
      value: null,
      rules: {
        required: false,
      },
    },
  },
  [REPORT.REPORT2]: {
    transactionDate: {
      type: REPORT_TYPE.DATE,
      label: "Transaction Date",
      value: null,
      rules: {
        required: true,
      },
    },
    store: {
      type: REPORT_TYPE.DROPDOWN,
      label: "Store",
      value: null,
      rules: {
        required: false,
      },
    },
  },
  [REPORT.REPORT3]: {
    categoryLevel1: {
      type: REPORT_TYPE.DROPDOWN,
      label: "Category Level 1",
      value: null,
    },
    categoryLevel2: {
      type: REPORT_TYPE.DROPDOWN,
      label: "Category Level 2",
      value: null,
    },
    categoryLevel3: {
      type: REPORT_TYPE.DROPDOWN,
      label: "Category Level 3",
      value: null,
    },
    categoryLevel4: {
      type: REPORT_TYPE.DROPDOWN,
      label: "Category Level 4",
      value: null,
    },
  },
  [REPORT.REPORT4]: {
    receiveOrderDate: {
      type: REPORT_TYPE.DATE,
      label: "Receipt Order Date",
      value: null,
      rules: {
        required: true,
      },
    },
    wareHouse: {
      type: REPORT_TYPE.DROPDOWN,
      label: "Warehouse",
      value: null,
      rules: {
        required: false,
      },
    }
  },
};
