import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Sales</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="disappear-after-992px">ID</th>
                            <th className="disappear-after-576px">Date</th>
                            <th>Seller</th>
                            <th className="disappear-after-992px">Visits</th>
                            <th className="disappear-after-992px">Sales</th>
                            <th>Total</th>
                            <th>Notify</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="disappear-after-992px">#241</td>
                            <td className="disappear-after-576px">July / 08 / 2022</td>
                            <td>Kris</td>
                            <td className="disappear-after-992px">15</td>
                            <td className="disappear-after-992px">11</td>
                            <td>$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="disappear-after-992px">#333</td>
                            <td className="disappear-after-576px">July / 08 / 2022</td>
                            <td>Stefan</td>
                            <td className="disappear-after-992px">20</td>
                            <td className="disappear-after-992px">15</td>
                            <td>$ 63500.00</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="disappear-after-992px">#465</td>
                            <td className="disappear-after-576px">July / 08 / 2022</td>
                            <td>Logan</td>
                            <td className="disappear-after-992px">10</td>
                            <td className="disappear-after-992px">8</td>
                            <td>$ 52800.00</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard