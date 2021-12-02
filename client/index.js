import React from "react";
import { withApollo } from "react-apollo";
import CodeBracesBox from "mdi-material-ui/Archive";
import { registerOperatorRoute } from "/imports/client/ui";
import { ModifierGroupView } from "../components";
import ContentViewExtraWideLayout from "/imports/client/ui/layouts/ContentViewExtraWideLayout";

registerOperatorRoute({
  group: "navigation",
  LayoutComponent: ContentViewExtraWideLayout,
  MainComponent: ModifierGroupView,
  hocs: [
    withApollo
  ],
  path: "/modifier-groups",
  // eslint-disable-next-line react/display-name
  SidebarIconComponent: (props) => <CodeBracesBox {...props} />,
  sidebarI18nLabel: "Modifier Groups"
});