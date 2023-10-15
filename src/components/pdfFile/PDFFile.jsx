import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Col, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const PDFFile = () => {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <div className="transfer-container ">
            <div className="content-container ">
              <Row bsPrefix="margin-box" >
                <Col md={12}>
                  <h2 className='text-title p-balance-mobile-receiver'>Confirmation</h2>
                </Col>
              </Row>
            </div>
          </div>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  )
}

export default PDFFile