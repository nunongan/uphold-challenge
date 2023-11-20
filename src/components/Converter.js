import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Spinner from 'react-bootstrap/Spinner';
import './styles.css';
import { fetchRates } from '../api/fetchRates';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

const Converter = () => {
  const [cachedRates, setCachedRates] = useState([]);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [rates, setRates] = useState([]);

  const getCurrencyImage = (currencyName) => {
    const imagePath = `/assets/${currencyName.toUpperCase()}.png`;
    return imagePath;
  };

  const handleImageError = (event) => {
    event.target.src = '/assets/Crypto.png';
  };

  const calculateRatesDebounced = (newAmount) => {
    const calculatedRatesForAll = cachedRates.map(
      (rate) => ({
        currency: rate.currency,
        amount: rate.bid * newAmount,
      })
    );

    setRates(calculatedRatesForAll);
  };

  const handleAmountChange = (e) => {
    if (isNaN(e.target.value) || !e.target.value) {
      setAmount('');
    } else {
      const parsedNewAmount = parseFloat(e.target.value);
      setAmount(parsedNewAmount);
      calculateRatesDebounced(parsedNewAmount);
    }
  };

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  useEffect(() => {
    const getRates = async () => {
      try {
        const ratesFromApi = await fetchRates(currency);

        if (ratesFromApi && ratesFromApi.length > 0) {
          const onlySelectedRates = ratesFromApi.filter(
            (rate) => rate.currency !== currency
          );

          setRates(
            onlySelectedRates.map((rate) => ({
              currency: rate.currency,
              amount: (rate.bid * amount).toFixed(8),
            }))
          );
          setCachedRates(onlySelectedRates);
        }
      } catch (error) {
        console.error('Error fetching rates: ', error);
      }
    };

    getRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  return (
    <>
      <Container fluid>
        <Container className="mt-2 mt-lg-5 d-flex flex-column">
          <Row>
            <Col>
              <h1 className="fw-bold my-5">
                Currency Converter
              </h1>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              className="d-flex justify-content-center"
            >
              <h3 className="smallTitle mt-lg-4 text-muted text-center">
                Receive competitive and transparent pricing
                with no hidden spreads. See how we compare.
              </h3>
            </Col>
          </Row>
        </Container>

        {!cachedRates || cachedRates.length === 0 ? (
          <Spinner
            className="mt-3"
            animation="border"
            role="status"
          >
            <span className="visually-hidden">
              Loading...
            </span>
          </Spinner>
        ) : (
          <Container className="my-3 my-lg-5 py-2 d-flex justify-content-center flex-column">
            <Row className="justify-content-center">
              <Col xs={7} lg={6} className="">
                <InputGroup className="currencyRow px-3">
                  <Form.Control
                    className="py-3 amountInput"
                    placeholder="0.00"
                    aria-label="Input"
                    aria-describedby="basic-addon2"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                  <Dropdown className="dropdown">
                    <Dropdown.Toggle
                      variant="primary"
                      id="dropdown-basic"
                    >
                      <span>
                        <Image
                          className="currency-logo me-2 align-items-center"
                          src={getCurrencyImage(currency)}
                          alt={currency}
                          onError={handleImageError}
                        />
                      </span>
                      <span className="fw-bold align-items-center">
                        {currency}
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu scrollbar menu-animation">
                      {rates?.map((rate, index) => (
                        <DropdownItem
                          key={index}
                          onClick={() =>
                            handleCurrencyChange(
                              rate.currency
                            )
                          }
                        >
                          <Image
                            className="currency-logo"
                            src={getCurrencyImage(
                              rate.currency
                            )}
                            alt={rate.currency}
                            onError={handleImageError}
                          />
                          {rate.currency}
                        </DropdownItem>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>{' '}
                </InputGroup>
              </Col>
            </Row>

            <Container className="d-flex justify-content-center my-4 my-lg-5">
              <div className="currenciesContainer">
                <div className="scrollbar">
                  <Container className="listCurrencies">
                    <Row className="d-flex justify-content-center">
                      <Col xs={12}>
                        {amount !== '' || amount === 0 ? (
                          rates.map((rate, index) => (
                            <div key={index}>
                              <Row className="my-1 my-md-2 px-4">
                                <Col
                                  xs={6}
                                  md={8}
                                  className="text-start my-1 m-lg-0"
                                >
                                  <span className="bidAmount text-start">
                                    {rate.amount}{' '}
                                  </span>
                                </Col>
                                <Col
                                  xs={2}
                                  className="symbolCurrency"
                                >
                                  <Image
                                    className="currency-logo"
                                    src={getCurrencyImage(
                                      rate.currency
                                    )}
                                    alt={rate.currency}
                                    onError={
                                      handleImageError
                                    }
                                  />
                                </Col>
                                <Col
                                  xs={2}
                                  className="currencyName "
                                >
                                  <span className="fw-bold">
                                    {rate.currency}
                                  </span>
                                </Col>
                              </Row>
                            </div>
                          ))
                        ) : (
                          <span className="text-muted">
                            Enter an amount to check the
                            rates.
                          </span>
                        )}{' '}
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </Container>
          </Container>
        )}
      </Container>
    </>
  );
};

export default Converter;
