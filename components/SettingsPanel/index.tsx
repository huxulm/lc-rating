import { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { setting_tabs } from "./config";
import Sidebar from "./Sidebar";

interface SettingsPanelProps {
  show: boolean;
  onHide: () => void;
}

const SettingsPanel = ({ show, onHide }: SettingsPanelProps) => {
  const [activeTab, setActiveTab] = useState(setting_tabs[0].key);

  const ActiveComponent = setting_tabs.find(
    (tab) => tab.key === activeTab
  )?.component;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="xl"
      centered
      className="settings-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>站点设置</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container fluid>
          <Row className="modal-content-row">
            <Col md={3} lg={2} className="sidebar-col">
              <Sidebar
                tabs={setting_tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </Col>

            <Col md={9} lg={10} className="content-col">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                {ActiveComponent ? ActiveComponent : "页面配置错误"}
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          关闭
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsPanel;
