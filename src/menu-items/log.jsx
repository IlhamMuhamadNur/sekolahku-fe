import { IconHistory } from "@tabler/icons-react";
import { FormattedMessage } from "react-intl";

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const log = {
  id: "log",
  title: <FormattedMessage id="log" />,
  type: "group",
  permissions: ["Daftar Paginasi - permission.LogAktivitas"],
  children: [
    {
      id: "log-aktivitas",
      title: <FormattedMessage id="log-aktivitas" />,
      type: "item",
      icon: IconHistory,
      url: "/log-aktivitas",
      permissions: ["Daftar Paginasi - permission.LogAktivitas"],
    },
  ],
};

export default log;
