import Typography from "antd/es/typography/Typography";

function AppFooter() {
    return <div className="appFooter">
      <Typography.Link href="https://www.google.co.in/" target="_blank">Privacy Policy </Typography.Link>
      <Typography.Link href="https://www.google.co.in/" target="_blank">Terms and Conditions </Typography.Link>
      <Typography.Link href="https://www.google.co.in/" target="_blank">Return Policy </Typography.Link>
      <Typography.Link href="tel:+12347890000" target="_blank">12347890000</Typography.Link>
      </div>
  }

export default AppFooter;