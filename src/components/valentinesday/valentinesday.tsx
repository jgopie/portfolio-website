import { useEffect, useMemo, useRef, useState } from "react";
import './valentinesday.styles.css';

type ValentinesDayProps = {
    initialCelebrated?: boolean;
};

const VALID_USERNAME = "dpoonburke";
const VALID_PASSWORD = "prettyboobsin";

export const ValentinesDay = ({ initialCelebrated = false }: ValentinesDayProps) => {
    const [userInput, setUserInput] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setLogIn] = useState(initialCelebrated);
    const [hasCelebrated, setHasCelebrated] = useState(initialCelebrated);
    const [loginError, setLoginError] = useState("");
    const [showHearts, setShowHearts] = useState(false);
    const [heartsKey, setHeartsKey] = useState(0);
    const noButtonRef = useRef<HTMLButtonElement | null>(null);
    const yesButtonRef = useRef<HTMLButtonElement | null>(null);
    const [noPosition, setNoPosition] = useState(() => getRandomNoPosition(null));
    function handleUserInput(e: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(e.target.value);
        if (loginError) {
            setLoginError("");
        }
    }
    function handlePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
        if (loginError) {
            setLoginError("");
        }
    }
    function handleLogIn() {
        if (userInput === VALID_USERNAME && password === VALID_PASSWORD) {
            setLogIn(true);
            setLoginError("");
            return;
        }
        setLoginError("That doesn't match the secret credentials.");
    }
    function handleYesClick() {
        setShowHearts(true);
        setHeartsKey(prevKey => prevKey + 1);
        setHasCelebrated(true);
        setValentinesCookie();
    }
    function handleNoClick() {
        setNoPosition(getRandomNoPosition(noButtonRef.current));
    }
    const heartBursts = useMemo(
        () =>
            Array.from({ length: 18 }, (_, index) => ({
                id: index,
                left: `${(index * 7 + 12) % 100}%`,
                delay: `${(index % 6) * 0.18}s`,
                duration: `${1.6 + (index % 5) * 0.25}s`,
                size: `${12 + (index % 4) * 6}px`,
            })),
        [],
    );
    useEffect(() => {
        if (!isLoggedIn || hasCelebrated) {
            return;
        }
        const frame = window.requestAnimationFrame(() => {
            setNoPosition(getNextToYesPosition(yesButtonRef.current, noButtonRef.current));
        });
        return () => window.cancelAnimationFrame(frame);
    }, [isLoggedIn, hasCelebrated]);
    return (
        <div className="valentinesday">
            {!isLoggedIn ? (
                <div className="valentinesday__card" role="group" aria-label="Login form">
                    <div className="valentinesday__field">
                        <label htmlFor="valentinesday-username">Username</label>
                        <input
                            id="valentinesday-username"
                            type="text"
                            onChange={handleUserInput}
                            value={userInput}
                            autoComplete="username"
                        />
                    </div>
                    <div className="valentinesday__field">
                        <label htmlFor="valentinesday-password">Password</label>
                        <input
                            id="valentinesday-password"
                            type="password"
                            onChange={handlePasswordInput}
                            value={password}
                            autoComplete="current-password"
                        />
                    </div>
                    {loginError ? <p className="valentinesday__error">{loginError}</p> : null}
                    <button className="valentinesday__button" onClick={handleLogIn}>
                        Log In
                    </button>
                </div>
            ) : hasCelebrated ? (
                <div className="valentinesday__card valentinesday__card--celebrate" aria-live="polite">
                    {showHearts ? (
                        <div className="valentinesday__hearts" aria-hidden="true" key={heartsKey}>
                            {heartBursts.map(heart => (
                                <span
                                    key={heart.id}
                                    className="valentinesday__heart"
                                    style={{
                                        left: heart.left,
                                        animationDelay: heart.delay,
                                        animationDuration: heart.duration,
                                        fontSize: heart.size,
                                    }}
                                >
                                    ♥
                                </span>
                            ))}
                        </div>
                    ) : null}
                    <p className="valentinesday__celebration">Happy Valentine's Day!</p>
                </div>
            ) : (
                <div className="valentinesday__card valentinesday__card--proposal" aria-live="polite">
                    {showHearts ? (
                        <div className="valentinesday__hearts" aria-hidden="true" key={heartsKey}>
                            {heartBursts.map(heart => (
                                <span
                                    key={heart.id}
                                    className="valentinesday__heart"
                                    style={{
                                        left: heart.left,
                                        animationDelay: heart.delay,
                                        animationDuration: heart.duration,
                                        fontSize: heart.size,
                                    }}
                                >
                                    ♥
                                </span>
                            ))}
                        </div>
                    ) : null}
                    <div className="valentinesday__rose">
                        <svg viewBox="0 0 120 120" role="img" aria-label="Rose illustration">
                            <defs>
                                <linearGradient id="rosePetal" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="var(--annotation)" />
                                    <stop offset="100%" stopColor="var(--accent)" />
                                </linearGradient>
                                <linearGradient id="roseStem" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#1f8b4c" />
                                    <stop offset="100%" stopColor="#0f5a2e" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M64 20c-8 0-16 6-18 14-2 9 4 17 12 20-6 8-4 19 5 24-1 10 6 18 16 18 10 0 17-8 16-18 9-5 11-16 5-24 8-3 14-11 12-20-2-8-10-14-18-14-4 0-8 2-12 6-4-4-8-6-12-6z"
                                fill="url(#rosePetal)"
                            />
                            <path
                                d="M60 62c-8 6-12 18-12 30 0 10 2 18 5 26 3 7 8 12 7 18 0 4 6 4 6 0-1-6 4-11 7-18 3-8 5-16 5-26 0-12-4-24-12-30-2-2-4-2-6 0z"
                                fill="url(#roseStem)"
                            />
                            <path
                                d="M46 86c-8 2-12 6-16 12-2 3 1 6 4 4 5-4 10-6 16-6 3 0 4-5-4-10z"
                                fill="#1f8b4c"
                            />
                        </svg>
                    </div>
                    <p className="valentinesday__question">Will you be my Valentine?</p>
                    <div className="valentinesday__actions">
                        <button
                            className="valentinesday__button valentinesday__button--yes"
                            onClick={handleYesClick}
                            ref={yesButtonRef}
                        >
                            Yes
                        </button>
                        <button
                            className="valentinesday__button valentinesday__button--no"
                            onClick={handleNoClick}
                            style={{ left: `${noPosition.left}px`, top: `${noPosition.top}px` }}
                            ref={noButtonRef}
                        >
                            No
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function setValentinesCookie() {
    if (typeof document === "undefined") {
        return;
    }
    document.cookie = "valentinesday_yes=1; Path=/; Max-Age=31536000; SameSite=Lax";
}

function getRandomNoPosition(button: HTMLButtonElement | null) {
    if (typeof window === "undefined") {
        return { top: 180, left: 220 };
    }
    const padding = 16;
    const buttonRect = button?.getBoundingClientRect();
    const buttonWidth = buttonRect?.width ?? 100;
    const buttonHeight = buttonRect?.height ?? 44;
    const maxLeft = Math.max(padding, window.innerWidth - buttonWidth - padding);
    const maxTop = Math.max(padding, window.innerHeight - buttonHeight - padding);
    const left = Math.floor(Math.random() * (maxLeft - padding + 1)) + padding;
    const top = Math.floor(Math.random() * (maxTop - padding + 1)) + padding;
    return { top, left };
}

function getNextToYesPosition(
    yesButton: HTMLButtonElement | null,
    noButton: HTMLButtonElement | null,
) {
    if (typeof window === "undefined") {
        return { top: 180, left: 320 };
    }
    const padding = 16;
    const gap = 16;
    const yesRect = yesButton?.getBoundingClientRect();
    if (!yesRect) {
        return getRandomNoPosition(noButton);
    }
    const noRect = noButton?.getBoundingClientRect();
    const noWidth = noRect?.width ?? 100;
    const noHeight = noRect?.height ?? 44;
    const idealRight = yesRect.right + gap + noWidth / 2;
    const idealLeft = yesRect.left - gap - noWidth / 2;
    const left =
        idealRight + noWidth / 2 < window.innerWidth - padding
            ? idealRight
            : Math.max(padding + noWidth / 2, idealLeft);
    const top = Math.min(
        Math.max(padding + noHeight / 2, yesRect.top + yesRect.height / 2),
        window.innerHeight - padding - noHeight / 2,
    );
    return { top, left };
}
