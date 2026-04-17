import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, Shield, File, Settings, PanelLeft, HelpCircle, Bell, User, LayoutDashboard, ChevronRight, ChevronUp, Plus, Lock, X, Eye, EyeOff } from 'lucide-react'

export default function ChangePassword12() {
  const navigate = useNavigate()
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [newPassword, setNewPassword] = useState('arC01#$12?_')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [activeTab, setActiveTab] = useState('personal')

  const handleUpdatePasswordClick = () => {
    setShowPasswordModal(true)
  }

  const handlePasswordSubmit = () => {
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      setShowPasswordModal(false)
      setShowSuccessModal(true)
    }
  }

  const handleSignIn = () => {
    setShowSuccessModal(false)
    navigate('/')
  }

  const closeModal = () => {
    setShowPasswordModal(false)
    setShowSuccessModal(false)
    setNewPassword('arC01#$12?_')
    setConfirmPassword('')
  }

  const validatePassword = (password: string) => {
    return {
      length: password.length >= 8,
      case: /[a-z]/.test(password) && /[A-Z]/.test(password),
      special: /[0-9!@#$%^&*(),.?":{}|<>]/.test(password)
    }
  }

  const validation = validatePassword(newPassword)

  const SuccessCircle = ({ isValid }: { isValid: boolean }) => (
    <div className={`w-[16px] h-[16px] rounded-full ${isValid ? 'bg-[#4CAF50]' : 'bg-gray-300'}`} />
  )

  return (
    <div className="min-h-screen w-full flex flex-col overflow-hidden">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-col md:justify-between md:items-center md:py-[24px] md:px-[16px] md:gap-[24px] md:w-[240px] md:max-w-[240px] bg-white border-r border-black shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-[24px] w-[50px]">
            <div className="flex flex-col gap-[5px] w-[50px] h-[25px]">
              <img src="https://s3-alpha-sig.figma.com/img/26ec/3ab4/0588c7482da725dcdeb68b2897f9bde2?Expires=1777248000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PSA09KnD8BDeEeZZ6cI~VtwcDg22Moj9P1AO5xeTXiY2OJx-KvohRLWP4pKNn82Yr9ydUl6NcjVgbc1hOwTD-Rywd-d1OnxemrSTgf0-pXlYz2parVqr49Sw1Gd3dnsRg-BLI3dWeI-TMa4dM1GVL74lZlH3ygrKx6Pyviq5vT9DPYqXEAmP0yu0I2USnzJAuFiD3vJXUmm2IbHEPc~ku69IKXveWcnCROgUSCdGQACnO4zfr-rq1g5~bkr-vOTF8SXKiVIeC8AwGjYJngONCgc41BfkoJhM1VotERpKTJfol4vxIaO~zccPFywRiKydECQS7nU0gULQlDtMU-VHFw__" className="w-[50px] h-[25px]" />
            </div>
            <div className="flex flex-col justify-center items-center gap-[12px] w-full">
              <Home className="w-[48px] h-[44px] text-black cursor-pointer hover:opacity-70" />
              <Shield className="w-[48px] h-[44px] text-black cursor-pointer hover:opacity-70" />
              <File className="w-[48px] h-[44px] text-black cursor-pointer hover:opacity-70" />
              <Settings className="w-[48px] h-[44px] text-black cursor-pointer hover:opacity-70" />
            </div>
          </div>
          <PanelLeft className="w-[50px] h-[24px] text-black cursor-pointer hover:opacity-70" />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex justify-end items-center py-[12px] px-[16px] md:px-[24px] gap-[20px] w-full h-[56px] bg-white border-b border-black">
            <HelpCircle className="w-[24px] h-[24px] text-black cursor-pointer hover:opacity-70" />
            <Bell className="w-[24px] h-[24px] text-black cursor-pointer hover:opacity-70" />
            <div className="w-[1px] h-[32px] bg-black/[0.09] rounded-full" />
            <User className="w-[56px] h-[32px] text-[#b3d1ff] cursor-pointer hover:opacity-70" />
          </div>

          {/* Breadcrumb and Title Section */}
          <div className="flex flex-col items-center py-[48px] px-[16px] md:px-[32px] pb-0 gap-[28px] overflow-hidden w-full">
            <div className="flex flex-col gap-[32px] w-full max-w-[980px]">
              <div className="flex items-center gap-[4px]">
                <LayoutDashboard className="w-[63px] h-[17px] text-black" />
                <ChevronRight className="w-[10px] h-[17px] text-black" />
                <div className="flex justify-center items-center gap-[10px]">
                  <p className="font-[Noto_Sans] text-[12px] font-bold leading-[16.8px] text-[#005eb8]">Manage Account</p>
                </div>
              </div>
              <p className="font-[Noto_Sans] text-[24px] md:text-[32px] font-bold leading-[28.8px] md:leading-[38.4px] text-[#212121]">Manage Account</p>
              <div className="flex items-center w-full h-[45px] shadow-[inset_0px_0px_0px_0px_rgba(0,0,0,0.09)]">
                <div className="flex flex-col items-center py-0 px-[12px] gap-[12px] h-[45px]">
                  <div className="w-full" />
                  <p 
                    className={`font-[Noto_Sans] text-[14px] font-medium leading-[21px] text-center cursor-pointer ${
                      activeTab === 'personal' ? 'text-[#005eb8]' : 'text-[#212121]'
                    }`}
                    onClick={() => setActiveTab('personal')}
                  >
                    Personal Details
                  </p>
                  <div className="w-full" />
                </div>
                <div className="flex flex-col items-center py-0 px-[12px] gap-[12px] h-[45px]">
                  <div className="w-full" />
                  <p 
                    className={`font-[Noto_Sans] text-[14px] leading-[21px] text-center cursor-pointer ${
                      activeTab === 'saved' ? 'text-[#005eb8] font-medium' : 'text-[#212121]'
                    }`}
                    onClick={() => {
                      setActiveTab('saved')
                    }}
                  >
                    Saved Profiles
                  </p>
                  <div className="w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex flex-col items-center py-[48px] px-[16px] md:px-[32px] gap-[28px] overflow-hidden bg-white bg-gradient-to-b from-[#005eb8]/7 to-[#5c55eb]/7">
            <div className="flex flex-col gap-[32px] w-full max-w-[980px]">
              {/* Personal Information Card */}
              <div className="flex flex-col w-full rounded-[8px] border border-black">
                <div className="flex py-[16px] px-[16px] md:px-[24px] gap-[24px] w-full bg-white rounded-tl-[8px] rounded-tr-[8px] border-b border-black">
                  <div className="flex-1 flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[12px]">
                      <p className="font-[Noto_Sans] text-[18px] font-bold leading-[27px] text-[#212121]">Personal Information</p>
                      <p className="font-[Noto_Sans] text-[14px] font-medium leading-[21px] text-[#6e6e6e]">Identity details are verified with Singpass and cannot be self-edited.</p>
                    </div>
                  </div>
                </div>
                <div className="flex py-[24px] px-[16px] md:px-[24px] gap-[24px] w-full bg-white rounded-bl-[8px] rounded-br-[8px]">
                  <div className="flex-1 flex flex-col gap-[24px]">
                    <div className="flex flex-col md:flex-row gap-[24px] w-full">
                      <div className="flex-1 flex flex-col gap-[12px]">
                        <div className="flex items-center gap-[8px] h-[21px]">
                          <div className="flex items-center gap-[4px]">
                            <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#212121]">First Name</p>
                          </div>
                        </div>
                        <div className="flex items-center py-[12px] px-[16px] gap-[8px] w-full h-[48px] bg-[#f5f5f5] rounded-[8px] border border-black">
                          <p className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#9e9e9e]">Chris</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-[12px]">
                        <div className="flex items-center gap-[8px] h-[21px]">
                          <div className="flex items-center gap-[4px]">
                            <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#212121]">Last Name</p>
                          </div>
                        </div>
                        <div className="flex items-center py-[12px] px-[16px] gap-[8px] w-full h-[48px] bg-[#f5f5f5] rounded-[8px] border border-black">
                          <p className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#9e9e9e]">Wong</p>
                        </div>
                      </div>
                      <ChevronUp className="hidden md:block w-[16px] h-[26px] text-black" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-[24px] w-full">
                      <div className="flex-1 flex flex-col gap-[12px]">
                        <div className="flex items-center gap-[8px] h-[21px]">
                          <div className="flex items-center gap-[4px]">
                            <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#212121]">Date of Birth</p>
                          </div>
                        </div>
                        <div className="flex items-center py-[12px] px-[16px] gap-[8px] w-full h-[48px] bg-[#f5f5f5] rounded-[8px] border border-black">
                          <p className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#9e9e9e]">01 Jan 1989</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-[12px]">
                        <div className="flex items-center gap-[8px] h-[21px]">
                          <div className="flex items-center gap-[4px]">
                            <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#212121]">NRIC/FIN</p>
                          </div>
                        </div>
                        <div className="flex items-center py-[12px] px-[16px] gap-[8px] w-full h-[48px] bg-[#f5f5f5] rounded-[8px] border border-black">
                          <p className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#9e9e9e]">S89234567D</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] w-full">
                      <Plus className="w-[53px] h-[21px] text-[#212121]" />
                      <div className="flex items-center py-[12px] px-[16px] gap-[8px] w-full h-[48px] bg-[#f5f5f5] rounded-[8px] border border-black">
                        <p className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#9e9e9e]">123 Pasir Ris St 21 #03-21 Singapore 645123</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="flex flex-col w-full rounded-[8px] border border-black">
                <div className="flex py-[16px] px-[16px] md:px-[24px] gap-[24px] w-full bg-white rounded-tl-[8px] rounded-tr-[8px] border-b border-black">
                  <div className="flex-1 flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[12px]">
                      <p className="font-[Noto_Sans] text-[18px] font-bold leading-[27px] text-[#212121]">Contact Information</p>
                      <p className="font-[Noto_Sans] text-[14px] font-medium leading-[21px] text-[#6e6e6e]">We'll only use this to send you marketing materials.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row py-[24px] px-[16px] md:px-[24px] gap-[24px] w-full">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex items-center gap-[8px] h-[21px]">
                        <div className="flex items-center gap-[4px]">
                          <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#212121]">Contact Number</p>
                        </div>
                      </div>
                      <div className="flex items-center py-[12px] px-[16px] gap-[8px] w-full h-[48px] bg-white rounded-[8px] border border-black">
                        <p className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#212121]">91234567</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-[8px]">
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex items-center gap-[8px] h-[21px]">
                        <div className="flex items-center gap-[4px]">
                          <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#212121]">Email Address</p>
                        </div>
                      </div>
                      <div className="flex items-center py-[12px] px-[16px] gap-[8px] w-full h-[48px] bg-white rounded-[8px] border border-black">
                        <p className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#212121]">chriswong@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex py-[16px] px-[16px] md:px-[24px] gap-[24px] w-full bg-[#f9f9f9] rounded-bl-[8px] rounded-br-[8px] border-t border-black">
                  <div className="flex-1 flex flex-col gap-[24px]">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[12px] w-full">
                      <p className="font-[Noto_Sans] text-[12px] font-medium leading-[16.8px] text-[#8d8d8d]">Changes apply to all your account immediately.</p>
                      <button className="flex justify-center items-center py-[8px] px-[16px] gap-[10px] h-[48px] bg-[#005eb8] rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] cursor-pointer hover:opacity-90 transition-opacity">
                        <p className="font-[Noto_Sans] text-[14px] font-medium leading-[21px] text-white">Save Changes</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Login & Security Card */}
              <div className="flex flex-col w-full md:w-[980px] rounded-[8px] border border-black">
                <div className="flex py-[16px] px-[16px] md:px-[24px] gap-[24px] w-full bg-white rounded-tl-[8px] rounded-tr-[8px] border-b border-black">
                  <div className="flex-1 flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[12px]">
                      <p className="font-[Noto_Sans] text-[18px] font-bold leading-[27px] text-[#212121]">Login & Security</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col py-[24px] px-[16px] md:px-[24px] gap-[24px] w-full bg-white rounded-bl-[8px] rounded-br-[8px]">
                  <div className="flex flex-col gap-[12px] w-full">
                    <div className="flex items-center gap-[8px] h-[21px]">
                      <div className="flex items-center gap-[4px]">
                        <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#212121]">Account Authenticator</p>
                      </div>
                    </div>
                    <div className="flex items-center py-[12px] px-[16px] gap-[8px] w-full h-[48px] bg-[#f5f5f5] rounded-[8px] border border-black">
                      <p className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#9e9e9e]">Linked via NRIC</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[12px] w-full">
                    <Lock className="w-[64px] h-[21px] text-[#212121]" />
                    <button 
                      onClick={handleUpdatePasswordClick}
                      className="flex justify-center items-center py-[12px] px-[16px] gap-[10px] h-[48px] bg-white rounded-[8px] border border-[#005eb8] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <p className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-[#005eb8]">Update Password</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center py-[16px] px-[16px] md:px-[24px] gap-[16px] md:gap-[447px] w-full h-auto md:h-[53px] bg-[#005eb8]">
        <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-white">Copyright © 2026 United Overseas Insurance Limited Co. Reg. No. 197100152R.</p>
        <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-right text-white">All Rights Reserved.</p>
      </div>

      {/* Modal Overlay */}
      {(showPasswordModal || showSuccessModal) && (
        <div className="fixed inset-0 bg-black/50 z-50" />
      )}

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-[90%] max-w-[560px] h-[538px] bg-white rounded-[12px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col items-end py-[32px] px-[32px] gap-[32px] h-full">
              <div className="flex flex-col gap-[32px] w-full">
                <div className="flex flex-col gap-[24px] w-full">
                  <div className="flex flex-col gap-[12px] w-full">
                    <div className="flex justify-between items-center w-full">
                      <p className="font-[Noto_Sans] text-[20px] font-bold leading-[24px] text-black">Choose a new password</p>
                      <X 
                        className="w-[24px] h-[24px] text-black cursor-pointer hover:opacity-70" 
                        onClick={closeModal}
                      />
                    </div>
                    <p className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#6e6e6e]">You'll be logged out of all active sessions after your password is changed.</p>
                  </div>
                  <div className="flex flex-col gap-[16px] w-full">
                    <div className="flex flex-col gap-[12px] w-full">
                      <div className="flex flex-col gap-[4px] w-full">
                        <div className="flex flex-col gap-[12px] w-full">
                          <div className="flex items-center gap-[8px] h-[21px]">
                            <div className="flex items-center gap-[4px]">
                              <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#212121]">Enter New Password</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center py-[12px] px-[16px] w-full h-[48px] bg-white rounded-[8px] border border-black">
                            <div className="flex items-center">
                              <input
                                type={showNewPassword ? 'text' : 'password'}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#212121] bg-transparent border-none outline-none w-full"
                              />
                            </div>
                            {showNewPassword ? (
                              <EyeOff 
                                className="w-[24px] h-[24px] text-black cursor-pointer hover:opacity-70" 
                                onClick={() => setShowNewPassword(!showNewPassword)}
                              />
                            ) : (
                              <Eye 
                                className="w-[24px] h-[24px] text-black cursor-pointer hover:opacity-70" 
                                onClick={() => setShowNewPassword(!showNewPassword)}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[8px] w-full">
                        <p className="font-[Noto_Sans] text-[12px] leading-[16.8px] text-[#6e6e6e]">Your password must contain at least:</p>
                        <div className="flex items-center gap-[8px] w-full">
                          <SuccessCircle isValid={validation.length} />
                          <p className="font-[Noto_Sans] text-[12px] leading-[16.8px] text-[#6e6e6e]">8 characters</p>
                        </div>
                        <div className="flex items-center gap-[8px] w-full">
                          <SuccessCircle isValid={validation.case} />
                          <p className="font-[Noto_Sans] text-[12px] leading-[16.8px] text-[#6e6e6e]">1 uppercase and lowercase letter</p>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <SuccessCircle isValid={validation.special} />
                          <p className="font-[Noto_Sans] text-[12px] leading-[16.8px] text-[#6e6e6e]">1 number or symbol (e.g. !, @, #)</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] w-full">
                      <div className="flex flex-col gap-[12px] w-full">
                        <div className="flex items-center gap-[8px] h-[21px]">
                          <div className="flex items-center gap-[4px]">
                            <p className="font-[Noto_Sans] text-[14px] leading-[21px] text-[#212121]">Confirm New Password</p>
                          </div>
                        </div>
                        <div className="flex items-center py-[12px] px-[16px] gap-[8px] w-full h-[48px] bg-white rounded-[8px] border border-black">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#8d8d8d] bg-transparent border-none outline-none flex-1"
                            placeholder="Re-enter new password"
                          />
                          {showConfirmPassword ? (
                            <EyeOff 
                              className="w-[24px] h-[24px] text-black cursor-pointer hover:opacity-70" 
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            />
                          ) : (
                            <Eye 
                              className="w-[24px] h-[24px] text-black cursor-pointer hover:opacity-70" 
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={handlePasswordSubmit}
                className="flex justify-center items-center py-[14px] px-[40px] gap-[10px] h-[52px] bg-[#005eb8] rounded-[8px] cursor-pointer hover:opacity-90 transition-opacity"
              >
                <p className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-white">Update Password</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-[90%] max-w-[560px] h-[232px] bg-white rounded-[12px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col items-end py-[32px] px-[32px] gap-[24px] h-full">
              <div className="flex justify-between items-center w-full">
                <p className="font-[Noto_Sans] text-[20px] font-bold leading-[24px] text-black">Password updated</p>
                <X className="w-[24px] h-[24px] text-black cursor-pointer hover:opacity-70" onClick={closeModal} />
              </div>
              <p className="font-[Noto_Sans] text-[16px] leading-[24px] text-[#6e6e6e]">You'll be logged out of all active sessions after your password is changed.</p>
              <button 
                onClick={handleSignIn}
                className="flex justify-center items-center py-[14px] px-[40px] gap-[10px] h-[52px] bg-[#005eb8] rounded-[8px] cursor-pointer hover:opacity-90 transition-opacity mt-auto"
              >
                <p className="font-[Noto_Sans] text-[16px] font-medium leading-[24px] text-white">Sign In</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}